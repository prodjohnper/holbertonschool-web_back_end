#!/usr/bin/env python3
'''
    Function to_kv with arguments k: str, v: Union[int, float]
    that returns a tuple containing k and the square of v

    k: str
    v: Union[int, float]

    return: tuple containing k and the square of v
'''
from typing import Union, Tuple


# type-annotated function
def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    '''
        Returns a tuple containing k and the square of v

        k: str
        v: Union[int, float]

        return: tuple containing k and the square of v
    '''
    return (k, v * v)
