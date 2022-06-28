// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FieldNumberOutlinedSvg from 'gupo-icons-base/es/asn/FieldNumberOutlined';

export interface FieldNumberOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFieldNumberOutlined: FieldNumberOutlinedIconType = (props, context) => (
    <Icon name='FieldNumberOutlined' {...{ ...props, ...context.attrs }} icon={FieldNumberOutlinedSvg} />
);

IconFieldNumberOutlined.displayName = 'IconFieldNumberOutlined';
IconFieldNumberOutlined.theme = 'outlined';
IconFieldNumberOutlined.originName = 'field-number';

export default IconFieldNumberOutlined;
