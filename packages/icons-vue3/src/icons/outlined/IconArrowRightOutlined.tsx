// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ArrowRightOutlinedSvg from 'icons-base/es/asn/ArrowRightOutlined';

export interface ArrowRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconArrowRightOutlined: ArrowRightOutlinedIconType = (props, context) => (
    <Icon name='ArrowRightOutlined' {...{ ...props, ...context.attrs }} icon={ArrowRightOutlinedSvg} />
);

IconArrowRightOutlined.displayName = 'IconArrowRightOutlined';
IconArrowRightOutlined.theme = 'outlined';
IconArrowRightOutlined.originName = 'arrow-right';

export default IconArrowRightOutlined;
