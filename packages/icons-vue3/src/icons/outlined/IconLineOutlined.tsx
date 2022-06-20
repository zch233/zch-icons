// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LineOutlinedSvg from 'icon-base/es/asn/LineOutlined';

export interface LineOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLineOutlined: LineOutlinedIconType = (props, context) => <Icon name='LineOutlined' {...{ ...props, ...context.attrs }} icon={LineOutlinedSvg} />;

IconLineOutlined.displayName = 'IconLineOutlined';

export default IconLineOutlined;
