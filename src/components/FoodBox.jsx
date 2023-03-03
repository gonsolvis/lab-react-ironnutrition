import { Card, Col, Button } from 'antd';

// Iteration 2
export default function FoodBox({name, calories, image, servings, deleteHandler}) {

  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories} </p>
        <p>Servings: {servings} </p>
        <p>Total calories:  {calories* servings}  </p>
        
        <Button type="primary"  onClick={() => deleteHandler(name)}> Delete </Button>
      </Card>
    </Col>
  );
}
