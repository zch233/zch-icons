// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ArrowLeftOutlinedSvg from 'icon-base/es/asn/ArrowLeftOutlined';

export interface ArrowLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconArrowLeftOutlined: ArrowLeftOutlinedIconType = (props, context) => (
    <Icon name='ArrowLeftOutlined' {...{ ...props, ...context.attrs }} icon={ArrowLeftOutlinedSvg} />
);

IconArrowLeftOutlined.displayName = 'IconArrowLeftOutlined';

export default IconArrowLeftOutlined;
