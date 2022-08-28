import renderer from "react-test-renderer";

export const getTestingComponent = (component: JSX.Element) => {
    return renderer.create(component).toJSON();
}

export const toMatchSnapshot = (component: JSX.Element): void  => {
  const tree = getTestingComponent(component);

  expect(tree).toMatchSnapshot();
}
