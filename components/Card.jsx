import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const toVaros = s => `$${s}`;

export default ({ imageSrc, price, vendor, title, shopURL }) => {
  return (
    <Card>
      <a href={shopURL} target="_blank">
        <Image src={imageSrc} size="small" centered />
      </a>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span>{vendor}</span>
        </Card.Meta>
        <Card.Description>
          {toVaros(price)}
        </Card.Description>
        <Card.Content extra>
          <a href={shopURL} target="_blank">
            <Button basic fluid color='teal'>
              Encontrado en {vendor}
            </Button>
          </a>
        </Card.Content>
      </Card.Content>
    </Card>
  )
};
