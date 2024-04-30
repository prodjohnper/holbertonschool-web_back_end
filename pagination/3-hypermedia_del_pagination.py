#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict


class Server:
    '''
        Server class to paginate a database of popular baby names.
    '''
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        '''
            Function that returns the dataset.
        '''
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        '''
            Function that returns a dictionary of the dataset indexed by row
            index.
        '''
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        '''
            Function that returns a dictionary with the following key-value
            pairs:

            - index: the current start index of the return page. That is the
            index of the first item in the current page of results.
            - data: the actual page of data.
            - page_size: the current page size.
            - next_index: the next index to query with. That is the index of
            the first item after the last item on the current page.
        '''
        # Get the indexed dataset
        dataset = self.indexed_dataset()

        # Assert that index and page_size are integers greater than 0
        assert type(index) == int and type(page_size) == int
        assert 0 <= index < len(dataset)

        # Get the data for the current page
        data = []
        next_index = index + page_size

        # Get the data for the current page
        for i in range(index, next_index):
            if dataset.get(i):
                data.append(dataset[i])
            else:
                i += 1
                next_index += 1

        # Get the data for the current page
        return {
            'index': index,
            'data': data,
            'page_size': page_size,
            'next_index': next_index,
        }
