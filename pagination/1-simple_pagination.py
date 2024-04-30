#!/usr/bin/env python3
'''
    Simple Pagination
'''
import csv
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    ''' return a tuple of size two containing a start index and an end index
    corresponding to the range of indexes to return in a list for those
    particular pagination parameters '''
    return (page * page_size - page_size, page * page_size)


class Server:
    '''
        Server class to paginate a database of popular baby names
    '''
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        '''
            Class constructor for Server
        '''
        # Create an instance variable __dataset and set it to None
        self.__dataset = None

    def dataset(self) -> List[List]:
        '''
            Class getter for dataset
        '''
        # return the dataset
        return self.__dataset

    def get_dataset(self) -> List[List]:
        '''
            Function that reads the dataset from the csv file and returns it
        '''
        if self.__dataset is None:
            # Open the file located in the DATA_FILE instance variable
            with open(self.DATA_FILE, newline='') as csvfile:
                self.__dataset = list(csv.reader(csvfile))

        # return the dataset
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        '''
            Function that gets a page with the pagination parameters
        '''
        # Assert that both page and page_size are integers greater than 0
        assert type(page) == int and type(page_size) == int
        assert page > 0 and page_size > 0

        # get the dataset
        self.get_dataset()

        # Calculate the start and end indexes of the page
        start, end = index_range(page, page_size)

        # Return the dataset in the range of start and end indexes
        return self.__dataset[start:end]
