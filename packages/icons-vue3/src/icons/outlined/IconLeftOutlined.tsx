// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LeftOutlinedSvg from 'icon-base/es/asn/LeftOutlined';

export interface LeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLeftOutlined: LeftOutlinedIconType = (props, context) => <Icon name='LeftOutlined' {...{ ...props, ...context.attrs }} icon={LeftOutlinedSvg} />;

IconLeftOutlined.displayName = 'IconLeftOutlined';

export default IconLeftOutlined;
