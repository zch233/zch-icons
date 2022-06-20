// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ReadOutlinedSvg from 'icon-base/es/asn/ReadOutlined';

export interface ReadOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconReadOutlined: ReadOutlinedIconType = (props, context) => <Icon name='ReadOutlined' {...{ ...props, ...context.attrs }} icon={ReadOutlinedSvg} />;

IconReadOutlined.displayName = 'IconReadOutlined';

export default IconReadOutlined;
