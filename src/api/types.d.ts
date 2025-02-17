declare module '*.png' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }
  
  export interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory?: string;
    strArea?: string;
    strInstructions?: string;
  }