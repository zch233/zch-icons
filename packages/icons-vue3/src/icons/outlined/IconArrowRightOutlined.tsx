// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ArrowRightOutlinedSvg from 'icon-base/es/asn/ArrowRightOutlined';

export interface ArrowRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconArrowRightOutlined: ArrowRightOutlinedIconType = (props, context) => (
    <Icon name='ArrowRightOutlined' {...{ ...props, ...context.attrs }} icon={ArrowRightOutlinedSvg} />
);

IconArrowRightOutlined.displayName = 'IconArrowRightOutlined';

export default IconArrowRightOutlined;
