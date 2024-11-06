from sqlalchemy.orm import Session
import csv
from datetime import datetime
from models import Tree


def import_csv_to_db(csv_file: str, db: Session):
    with open(csv_file, mode="r") as file:
        csv_reader = csv.DictReader(file, delimiter=";")
        for row in csv_reader:
            tree = Tree(
                management_domain=row["Emplacement - Domanialité gestionnaire"],
                arrondissement=row["Emplacement - Arrondissement"],
                address_complement=row["Emplacement - Complément d'adresse"],
                site_address=row["Emplacement - Site / Adresse"],
                circumference_cm=row["Arbre - Circonférence en cm"],
                height_m=row["Arbre - Hauteur en m"],
                species_variety=row["Arbre essence - Espèce var."],
                cultivar=row["Arbre essence - Cultivar"],
                type=row["Arbre essence - Genre"],
                planted_on=(
                    datetime.fromisoformat(row["Arbre Exploitation - Planté le"])
                    if row["Arbre Exploitation - Planté le"]
                    else None
                ),
                french_name=row["Arbre Essence - Nom français"],
                geo_shape=row["geo_shape"],
            )
            db.add(tree)
        db.commit()
