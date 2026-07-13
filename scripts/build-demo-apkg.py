#!/usr/bin/env python3
"""Génère les fichiers .apkg de démonstration à partir du catalogue.

Chaque deck de démonstration contient ses cartes d'exemple (celles affichées
sur la page produit) plus une carte de présentation indiquant explicitement
qu'il s'agit d'une version de démonstration.

Usage :
    npx tsx scripts/export-decks-json.ts /tmp/decks.json
    python3 scripts/build-demo-apkg.py /tmp/decks.json dist-decks/
"""
import hashlib
import json
import sys
from pathlib import Path

import genanki

MODEL_ID = 1607392319
MODEL = genanki.Model(
    MODEL_ID,
    "Rappel — Question/Réponse",
    fields=[{"name": "Question"}, {"name": "Réponse"}, {"name": "Source"}],
    templates=[
        {
            "name": "Carte",
            "qfmt": '<div class="q">{{Question}}</div>',
            "afmt": '{{FrontSide}}<hr id="answer"><div class="a">{{Réponse}}</div>'
            '<div class="src">{{Source}}</div>',
        }
    ],
    css="""
.card { font-family: Georgia, serif; font-size: 19px; line-height: 1.5;
        color: #1d1b16; background: #fbfaf7; text-align: left; padding: 12px; }
.q { font-weight: 600; }
.a { margin-top: 8px; }
.src { margin-top: 14px; font-size: 13px; color: #918c80; }
""",
)


def stable_id(text: str) -> int:
    """Identifiant de deck déterministe (63 bits) dérivé du slug."""
    return int(hashlib.sha256(text.encode()).hexdigest()[:15], 16)


def build(decks_json: Path, out_dir: Path) -> None:
    decks = json.loads(decks_json.read_text())
    out_dir.mkdir(parents=True, exist_ok=True)

    for deck_data in decks:
        slug = deck_data["slug"]
        title = deck_data["title"]
        is_demo = deck_data.get("demo", False)
        deck_name = f"Rappel — {title}" + (" (démo)" if is_demo else "")
        deck = genanki.Deck(stable_id(slug), deck_name)

        if is_demo:
            deck.add_note(
                genanki.Note(
                    model=MODEL,
                    fields=[
                        "À propos de ce deck de démonstration",
                        (
                            "Ce fichier est la version de démonstration du deck "
                            f"« {title} » : il contient les cartes d'exemple "
                            "présentées sur la page produit, afin d'illustrer le "
                            "format et la qualité des cartes. Le deck complet "
                            f"comptera {deck_data['cardCount']} cartes."
                        ),
                        "rappel · démonstration",
                    ],
                    guid=genanki.guid_for(slug, "notice"),
                )
            )

        for card in deck_data["sampleCards"]:
            deck.add_note(
                genanki.Note(
                    model=MODEL,
                    fields=[card["front"], card["back"], card.get("tag", "")],
                    guid=genanki.guid_for(slug, card["front"]),
                )
            )

        out_path = out_dir / f"{slug}.apkg"
        genanki.Package(deck).write_to_file(out_path)
        print(f"  {out_path} ({out_path.stat().st_size} octets)")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)
    build(Path(sys.argv[1]), Path(sys.argv[2]))
