import { HiOutlineChartBar } from 'react-icons/hi';
import {
  Card,
  InfoContainer,
  RecipeName,
  InfoBlock,
  Label,
} from './Recipe.styled';
export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
  return (
    <Card>
      <RecipeName>{name}</RecipeName>
      <InfoContainer>
        <InfoBlock>
          <HiOutlineChartBar size={24} />
          <Label>{time} min</Label>
        </InfoBlock>
        <InfoBlock>
          <span>Icon</span>
          <Label>{servings} servings</Label>
        </InfoBlock>
        <InfoBlock>
          <span>Icon</span>
          <Label>{calories} calories</Label>
        </InfoBlock>
      </InfoContainer>
    </Card>
  );
};
