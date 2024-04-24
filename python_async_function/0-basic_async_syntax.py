#!/usr/bin/env python3
'''
    Async syntax coroutine that takes in an integer argument
    (max_delay, with a default value of 10) named wait_random
    that waits for a random delay between 0 and max_delay
    (included and float value) seconds and eventually returns it.
'''
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    '''
        Async syntax coroutine that takes in an integer argument
        that waits for a random delay between 0 and max_delay
        (included and float value) seconds and eventually returns it.
    '''
    # random.uniform(a, b) returns a random floating point number
    delay = random.uniform(0, max_delay)

    # asyncio.sleep() always returns a coroutine object
    await asyncio.sleep(delay)

    # return the delay
    return delay
