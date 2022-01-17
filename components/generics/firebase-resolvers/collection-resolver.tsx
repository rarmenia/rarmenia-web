import {collection, FirestoreError, getFirestore} from 'firebase/firestore';
import React from 'react';
import {useCollectionDataOnce} from 'react-firebase-hooks/firestore';
import {firebaseApp} from '../../../firebase/client';

interface Props<T> {
  path: string;
  children: (args: {
    data?: T[],
    loading: boolean,
    error?: FirestoreError,
  }) => JSX.Element;
}

export default function CollectionResolver<T>(props: Props<T>): JSX.Element {

  const [data, loading, error] = useCollectionDataOnce<T>(
    // @ts-ignore
    collection(getFirestore(firebaseApp), ...(props.path as string).split('/'))
  );

  return props.children({data, loading, error});

}
