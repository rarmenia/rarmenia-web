import {doc, FirestoreError, getFirestore} from 'firebase/firestore';
import React from 'react';
import {useDocumentDataOnce} from 'react-firebase-hooks/firestore';
import {firebaseApp} from '../../../firebase/client';

interface Props<T> {
  path: string;
  children: (args: {
    data?: T,
    loading: boolean,
    error?: FirestoreError,
  }) => JSX.Element;
}

export default function DocumentResolver<T>(props: Props<T>): JSX.Element {

  const [data, loading, error] = useDocumentDataOnce<T>(
    // @ts-ignore
    doc(getFirestore(firebaseApp), ...(props.path as string).split('/'))
  );

  return props.children({data, loading, error});

}
