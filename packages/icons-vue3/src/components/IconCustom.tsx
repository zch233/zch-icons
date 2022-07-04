import { computed, FunctionalComponent } from 'vue';
import Icon from './Icon';

export const IconCustom = (): FunctionalComponent<{ iconName: string }> => {
    const icon = computed(async () => {
        const aa = await import('../../../../assets/svg/empty.svg');
        console.log(aa);
        return aa.default;
    });
    // @ts-ignore
    return (props, context) => <Icon icon={icon.value} />;
};
