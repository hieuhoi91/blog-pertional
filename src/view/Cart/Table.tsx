'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

import { products } from '@/data/mock-data';

const columns = [
  {
    key: 'delete',
    lable: '',
  },
  {
    key: 'thumnail',
    label: '',
  },
  {
    key: 'name',
    label: 'NAME',
  },
  {
    key: 'price',
    label: 'Price',
  },
  {
    key: 'quantity',
    label: 'Quantity',
  },
  {
    key: 'subtotal',
    label: 'Subtotal',
  },
];

const Tables = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedKeys, setSelectedKeys] = useState<any>(new Set(['2']));

  return (
    <Table
      aria-label='Controlled table example with dynamic content'
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={products}>
        {(item) => (
          <TableRow key={item.name}>
            <TableCell>
              <button className='hover:bg-hover-text text-hover-text flex h-6 w-6 items-center justify-center rounded-full transition-all hover:text-white'>
                <IoClose size={16} />
              </button>
            </TableCell>
            <TableCell>
              <Image src={item.thumnail} alt='' width={32} height={32} />
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>${item.price}</TableCell>
            <TableCell>
              <div className='border-text-secondary flex h-[40px] w-20 justify-center rounded-full border dark:border-none'>
                <input
                  type='number'
                  className='w-full rounded-full border-0 px-6 text-center text-sm focus:ring-0 dark:text-black'
                  min='1'
                  max='50'
                  defaultValue={1}
                />
              </div>
            </TableCell>
            <TableCell>${item.price}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default Tables;
