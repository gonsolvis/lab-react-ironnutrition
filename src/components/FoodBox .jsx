import { Card, Col, Button } from 'antd';



// Iteration 2
function FoodBox({food}) {


  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories} </p>
        <p>Servings: {food.servings} </p>
        {food.calories* food.servings} {food.calories* food.servings} 
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;