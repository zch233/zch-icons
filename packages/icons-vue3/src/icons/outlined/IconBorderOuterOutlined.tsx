// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderOuterOutlinedSvg from 'icon-base/es/asn/BorderOuterOutlined';

export interface BorderOuterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBorderOuterOutlined: BorderOuterOutlinedIconType = (props, context) => (
    <Icon name='BorderOuterOutlined' {...{ ...props, ...context.attrs }} icon={BorderOuterOutlinedSvg} />
);

IconBorderOuterOutlined.displayName = 'IconBorderOuterOutlined';

export default IconBorderOuterOutlined;
