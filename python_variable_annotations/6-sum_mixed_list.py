#!/usr/bin/python3
'''
    Function sum_mixed_list that takes a list mxd_lst of integers
    and floats as arguments and returns their sum as a float

    mxd_lst: list of integers and floats

    return: sum of mxd_lst
'''
from typing import List, Union


# type-annotated function
def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    '''
        Returns the sum of a list of integers and floats

        mxd_lst: list of integers and floats

        return: sum of mxd_lst
    '''
    return sum(mxd_lst)
