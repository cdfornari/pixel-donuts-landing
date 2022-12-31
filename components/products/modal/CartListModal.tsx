import { Modal, Text, Divider, Grid } from '@nextui-org/react';
import { useContext, useState, useEffect, FC } from 'react';
import { CountryContext, ModalContext } from '../../../context';
import { products } from '../../../data/products';
import { CarouselCartList } from '../carousel/CarouselCart';

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const CartListModal: FC<Props> = ( {visible, setVisible} ) => {
  const {country} = useContext(CountryContext);
  const {productSelected } = useContext(ModalContext);
  const [units, setUnits] = useState(1);
  useEffect(() => {
    setUnits(1);
  }, [visible])
  
  return (
    <Modal
      width="600px"
      closeButton
      preventClose
      blur
      aria-labelledby="modal-title"
      onClose={() => setVisible(false)}
      open={visible}
    >
      <Modal.Body>
        <Grid xs= {16} css={{width: '100%', height: 'max-content'}}>
          <CarouselCartList
            products={products}
          />
        </Grid>
      </Modal.Body>
      <Divider />
      <Modal.Footer justify='center'>
        <Text h3>
          {country === 'vzla' ? `Precio Total:   $` : `合計金額   ¥`} 
          {(units * productSelected.price).toFixed(2)}
        </Text>
      </Modal.Footer>
    </Modal>
  )
}