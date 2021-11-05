import App from '../App';
import { mount } from 'enzyme';
import { findByTestAttr } from "../../test/testUtils";
import Root from '../Root';
const setup = () => {
  return mount(<Root><App /></Root>);
};

test("renders App Component without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "app-component");
  expect(appComponent.length).toBe(1);
});

test("click 'click me' button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "click-me-button");
  button.simulate('click');
  const modal = findByTestAttr(wrapper, "modal");
  expect(modal.length).toBe(1);
});
