import { shallowMount } from '@vue/test-utils';
import PersonGenerator from '@/components/PersonGenerator.vue';

describe('PersonGenerator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PersonGenerator);
  });


  it('displays the correct initial data', () => {

    expect(wrapper.vm.firstName).toBe('Vue');
    expect(wrapper.vm.lastName).toBe('JS');
    expect(wrapper.vm.email).toBe('vue.js@email.com');
    expect(wrapper.vm.gender).toBe('male');
  });

  it('updates data with random user information', async () => {
    const mockData = {
      results: [
        {
          name: {
            first: 'John',
            last: 'Doe',
          },
          email: 'john.doe@example.com',
          gender: 'male',
          picture: {
            large: 'https://example.com/picture.jpg',
          },
        },
      ],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    await wrapper.vm.getRandomUserData();

    expect(wrapper.vm.picture).toBe(mockData.results[0].picture.large);
    expect(wrapper.vm.firstName).toBe(mockData.results[0].name.first);
    expect(wrapper.vm.lastName).toBe(mockData.results[0].name.last);
    expect(wrapper.vm.email).toBe(mockData.results[0].email);
    expect(wrapper.vm.gender).toBe(mockData.results[0].gender);
  });

  it('calls getRandomUserData method when the button is clicked', () => {
    const getRandomUserData = jest.spyOn(wrapper.vm, 'getRandomUserData');

    wrapper.find('button').trigger('click');

    expect(getRandomUserData).toHaveBeenCalled();
  });
});
