#!/usr/bin/env python3
'''
    Function make_multiplier that takes a float multiplier as argument
    and returns a function that multiplies a float by multiplier

    multiplier: float

    return: function that multiplies a float by multiplier
'''
from typing import Callable


# type-annotated function
def make_multiplier(multiplier: float) -> Callable[[float], float]:
    '''
        Returns a function that multiplies a float by multiplier

        multiplier: float

        return: function that multiplies a float by multiplier
    '''
    def multiply(n: float) -> float:  # type-annotated function
        '''
            Returns the product of a float and multiplier

            n: float

            return: product of n and multiplier
        '''
        return n * multiplier
    return multiply
