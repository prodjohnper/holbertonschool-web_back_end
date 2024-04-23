#!/usr/bin/python3
'''
    Function sum_list that takes a list input_list of
    floats as argument and returns their sum as a float
'''
from typing import List


def sum_list(input_list: List[float]) -> float:  # type-annotated function
    '''
        Returns the sum of a list of floats

        input_list: list of floats

        return: sum of input_list
    '''
    return sum(input_list)
