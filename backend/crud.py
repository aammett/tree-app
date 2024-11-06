from sqlalchemy.orm import Session
from sqlalchemy import func, desc
from models import Tree


def get_tree_count_by_arrondissement(db: Session):
    results = (
        db.query(Tree.arrondissement, func.count(Tree.id).label("tree_count"))
        .group_by(Tree.arrondissement)
        .order_by(desc("tree_count"))
        .all()
    )
    return results


def get_tree_count_by_type(db: Session):
    results = (
        db.query(Tree.type, func.count(Tree.id).label("tree_count"))
        .group_by(Tree.type)
        .order_by(desc("tree_count"))
        .all()
    )
    return results
