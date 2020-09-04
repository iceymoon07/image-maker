import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './index.module.scss';
import { selectImages } from '../../../../features/project/projectSlice';
import {
  selectCurImageId,
  setCurImage,
} from '../../../../features/editor/editorSlice';

function PageList() {
  const images = useSelector(selectImages);
  const curImageId = useSelector(selectCurImageId);
  const dispatch = useDispatch();

  return (
    <div className={styles.pageList}>
      {images.allIds.map((id) => {
        const image = images.byId[id];
        const { name } = image;

        return (
          <div
            onClick={() => {
              dispatch(setCurImage(id));
            }}
            className={styles.pageItem}
            style={{
              color: id === curImageId ? 'blue' : 'black',
              background: id === curImageId ? '#cecece' : '#fff',
            }}
            key={id}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
}

export default PageList;