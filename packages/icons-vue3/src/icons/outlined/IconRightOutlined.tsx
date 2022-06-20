// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RightOutlinedSvg from 'icon-base/es/asn/RightOutlined';

export interface RightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRightOutlined: RightOutlinedIconType = (props, context) => <Icon name='RightOutlined' {...{ ...props, ...context.attrs }} icon={RightOutlinedSvg} />;

IconRightOutlined.displayName = 'IconRightOutlined';

export default IconRightOutlined;
