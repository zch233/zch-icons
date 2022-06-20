// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderOutlinedSvg from 'icon-base/es/asn/BorderOutlined';

export interface BorderOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBorderOutlined: BorderOutlinedIconType = (props, context) => (
    <Icon name='BorderOutlined' {...{ ...props, ...context.attrs }} icon={BorderOutlinedSvg} />
);

IconBorderOutlined.displayName = 'IconBorderOutlined';

export default IconBorderOutlined;
