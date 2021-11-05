import { shallow } from 'enzyme';
import { findByTestAttr } from "../../test/testUtils";
import Modal from '../components/shared/modal/Modal';

const setup = () => {
    return shallow(<Modal />);
};

test("renders Modal Component without error", () => {
    const wrapper = setup();
    const modalComponent = findByTestAttr(wrapper, "modal");
    expect(modalComponent.length).toBe(1);
});

