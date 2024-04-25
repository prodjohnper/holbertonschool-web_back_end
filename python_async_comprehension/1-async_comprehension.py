#!/usr/bin/env python3
'''
    Coroutine async_comprehension
'''
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    '''
        Coroutine async_comprehension that takes no arguments.
        The coroutine will collect 10 random numbers using an async
        comprehensing over async_generator, then return the 10 random numbers.
    '''
    # Return the 10 random numbers from async_generator
    return [num async for num in async_generator()]
