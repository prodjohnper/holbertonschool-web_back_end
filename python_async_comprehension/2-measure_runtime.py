#!/usr/bin/env python3
'''
    measure_runtime coroutine that measures the total runtime and returns it.
'''
import asyncio
import time
from typing import List
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    '''
        Coroutine measure_runtime that will execute async_comprehension 4
        times in parallel using asyncio.gather. measure_runtime should
        measure the total runtime and return it.
    '''
    # Start the timer
    start_time = time.time()

    # Execute async_comprehension 4 times in parallel
    await asyncio.gather(*(async_comprehension() for _ in range(4)))

    # End the timer
    end_time = time.time()

    # Return the total runtime
    return end_time - start_time
