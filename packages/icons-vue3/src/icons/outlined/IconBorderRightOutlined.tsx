// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderRightOutlinedSvg from 'icon-base/es/asn/BorderRightOutlined';

export interface BorderRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBorderRightOutlined: BorderRightOutlinedIconType = (props, context) => (
    <Icon name='BorderRightOutlined' {...{ ...props, ...context.attrs }} icon={BorderRightOutlinedSvg} />
);

IconBorderRightOutlined.displayName = 'IconBorderRightOutlined';

export default IconBorderRightOutlined;
