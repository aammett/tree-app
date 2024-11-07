from pydantic import BaseModel

class ArrondissementTreeCount(BaseModel):
    arrondissement: str
    tree_count: int


class TypeTreeCount(BaseModel):
    type: str
    tree_count: int
