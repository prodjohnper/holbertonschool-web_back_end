#!/usr/bin/env python3
'''
    Function element_length that takes a list
    lst of strings as argument and returns a list
    of integers representing the lengths of the
    corresponding strings
'''
from typing import Iterable, List, Sequence, Tuple


# type-annotated function
def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    '''
        Returns a list of tuples containing the
        elements of lst and their lengths


        lst: list of strings


        return: list of tuples containing the elements
                of lst and their lengths
    '''
    return [(i, len(i)) for i in lst]
