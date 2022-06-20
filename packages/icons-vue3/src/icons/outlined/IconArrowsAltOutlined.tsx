// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ArrowsAltOutlinedSvg from 'icon-base/es/asn/ArrowsAltOutlined';

export interface ArrowsAltOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconArrowsAltOutlined: ArrowsAltOutlinedIconType = (props, context) => (
    <Icon name='ArrowsAltOutlined' {...{ ...props, ...context.attrs }} icon={ArrowsAltOutlinedSvg} />
);

IconArrowsAltOutlined.displayName = 'IconArrowsAltOutlined';

export default IconArrowsAltOutlined;
