#!/usr/bin/env python3
'''
    Function task_wait_n that takes in an integer
    n and max_delay and returns a asyncio.Task.
'''
import asyncio
from typing import List
wait_n = __import__('1-concurrent_coroutines').wait_n


def task_wait_n(n: int, max_delay: int) -> List[float]:
    '''
        Function that takes in an integer n and
        max_delay and returns a asyncio.Task.
    '''
    # Return the asyncio.Task object
    return asyncio.create_task(wait_n(n, max_delay))
