import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const toVaros = s => `$${s}`;

export default ({ key, imageSrc, price, vendor, title, shopURL }) => {

  const openVendorPage = url => {
    const win = window.open(url, '_blank');
    win.focus();
  };

  return (
    <Card key={key}>
      <Image src={imageSrc} size="medium" onClick={() => openVendorPage(shopURL)}/>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span>{vendor}</span>
        </Card.Meta>
        <Card.Description>
          {toVaros(price)}
        </Card.Description>
        <Card.Content extra>
          <Button basic color='green'>
            Encontrado en {vendor}
          </Button>
        </Card.Content>
      </Card.Content>
    </Card>
  )
};
