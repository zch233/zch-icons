// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FieldNumberOutlinedSvg from 'icon-base/es/asn/FieldNumberOutlined';

export interface FieldNumberOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFieldNumberOutlined: FieldNumberOutlinedIconType = (props, context) => (
    <Icon name='FieldNumberOutlined' {...{ ...props, ...context.attrs }} icon={FieldNumberOutlinedSvg} />
);

IconFieldNumberOutlined.displayName = 'IconFieldNumberOutlined';

export default IconFieldNumberOutlined;
