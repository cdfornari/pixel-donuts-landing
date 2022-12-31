import { Button, Image, Modal, Row, Text, Col, Grid, Input, Radio, Spacer, Divider } from '@nextui-org/react'
import { useContext, useState, useEffect, FC } from 'react';
import { CountryContext, ModalContext } from '../../../context';

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const CartModal: FC<Props> = ( {visible, setVisible} ) => {
  const {country} = useContext(CountryContext);
  const {productSelected } = useContext(ModalContext);
  const [units, setUnits] = useState(1);
  useEffect(() => {
    setUnits(1);
  }, [visible])
  
  return (
    <Modal
      width="800px"
      closeButton
      preventClose
      blur
      aria-labelledby="modal-title"
      onClose={() => setVisible(false)}
      open={visible}
    >
      <Modal.Header>
        <Text b size={22} transform='uppercase'>
          {country === 'vzla' ? `CheckOut - Delivery Pixel Donuts` : `チェックアウト - 配達 Pixel Donuts`}
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Grid xs={12} sm={ 14 } direction="column">
          <Spacer y={1} />
          <Grid
            css={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Input
              labelPlaceholder= {country === 'vzla' ? `Dirección` : `方向`}
              clearable
              bordered
              fullWidth
              //width='100%'
              size='lg'
              type='text'
            />
            <Spacer y={2.5} />
            <Input
              labelPlaceholder= {country === 'vzla' ? `Estado` : `領域`}
              clearable
              bordered
              fullWidth
              //width='50%'
              size='lg'
              type='text'
            />
            <Spacer y={2.5} />
            <Input
              labelPlaceholder={country === 'vzla' ? 'Ciudad' : '県'}
              clearable
              bordered
              fullWidth
              //width='50%'
              size='lg'
              type='text'
            />
            <Spacer y={2.5} />
            <Input
              labelPlaceholder= {country === 'vzla' ? 'Nro. Telefono' : '電話番号'}
              clearable
              bordered
              fullWidth
              //width='50%'
              size='lg'
              type='text'
            />
            <Spacer y={1} />
            <Radio.Group
              label= {country === 'vzla' ? 'Metodo de Pago' : '支払方法'}
              orientation= 'horizontal'
            >
              <Radio value = {country === 'vzla' ? 'Tarjeta Credito' : 'クレジットカード'}>
                {country === 'vzla' ? 'Tarjeta Credito' : 'クレジットカード'}
              </Radio>
              <Radio value = "debito">
                {country === 'vzla' ? 'Tarjeta Debito' : '借方'}
              </Radio>
              <Radio value = "bancoMovil">
                {country === 'vzla' ? 'Banca Movil' : 'モバイルバンキング'}
              </Radio>
              <Radio value = "Instapago">
                {country === 'vzla' ? 'InstaPago' : 'Insta 私が払う'}
              </Radio>  
              <Radio value = "ubipago">
                {country === 'vzla' ? 'UbiiPago' : 'Ubi 私が払う'}
              </Radio> 
            </Radio.Group>
          </Grid>
        </Grid>
      </Modal.Body>
      <Divider />
      <Modal.Footer>
        <Grid.Container direction='row'>
            <Grid xs= {6} justify='center'>
              <Text h3>
                {country === 'vzla' ? `Precio Total:   $` : `合計金額   ¥`} 
                {(units * productSelected.price).toFixed(2)}
              </Text>
            </Grid>

            <Grid xs= {6} justify='center'>
              <Button color='success' bordered css= {{
                width: '100%',
              }}
              size='xl'>
                {country === 'vzla' ? `Crear Orden` : `注文を作成`} 
              </Button>
            </Grid>

        </Grid.Container>
      </Modal.Footer>
    </Modal>
  )
}