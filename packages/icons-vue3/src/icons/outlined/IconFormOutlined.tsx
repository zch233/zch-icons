// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FormOutlinedSvg from 'icon-base/es/asn/FormOutlined';

export interface FormOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFormOutlined: FormOutlinedIconType = (props, context) => <Icon name='FormOutlined' {...{ ...props, ...context.attrs }} icon={FormOutlinedSvg} />;

IconFormOutlined.displayName = 'IconFormOutlined';

export default IconFormOutlined;
