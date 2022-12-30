import { Button, Image, Modal, Row, Text, Col } from '@nextui-org/react'
import { useContext, useState, useEffect } from 'react'
import { CountryContext, ModalContext } from '../../../context';
import { ItemCounter } from '../../ui/ItemCounter';

export const ProductModal = () => {
  const {country} = useContext(CountryContext);
  const {productSelected, visible, setVisible} = useContext(ModalContext);
  const [units, setUnits] = useState(1);
  useEffect(() => {
    setUnits(1);
  }, [visible])
  
  return (
    <Modal
    closeButton
    blur
    aria-labelledby="modal-title"
    onClose={() => setVisible(false)}
    open={visible}
  >
    <Modal.Header>
      <Text b size={22} transform='uppercase'>
        {country === 'vzla' ? productSelected?.titleVE : productSelected?.titleJP }
      </Text>
    </Modal.Header>
    <Modal.Body>
      <Row justify="space-between">
        <Image 
          src= {productSelected.image}
          alt = "Product image"
          objectFit='fill'
        />
      </Row>
      <Row justify='center'>
        <Text h3>
          {country === 'vzla' ? `$${productSelected.price}` : `¥${productSelected.price}`}
        </Text>
      </Row>
      <Row justify='center'>
        <Col >
        <Text h3>{country === 'vzla' ? 'Unidades' : '単位'}</Text>
        </Col>
        <ItemCounter count={units} maxValue={99} onChange={setUnits}/>
      </Row>
    </Modal.Body>
    <Modal.Footer>
      <Button color='secondary' bordered css= {{
        width: '100%',
      }}
      size='xl'>
        {country === 'vzla' ? `Añadir al carrito   $` : `カートに追加   ¥`} 
        {(units * productSelected.price).toFixed(2)}
      </Button>
    </Modal.Footer>
  </Modal>
  )
}