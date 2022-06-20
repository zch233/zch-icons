// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BehanceOutlinedSvg from 'icon-base/es/asn/BehanceOutlined';

export interface BehanceOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBehanceOutlined: BehanceOutlinedIconType = (props, context) => (
    <Icon name='BehanceOutlined' {...{ ...props, ...context.attrs }} icon={BehanceOutlinedSvg} />
);

IconBehanceOutlined.displayName = 'IconBehanceOutlined';

export default IconBehanceOutlined;
