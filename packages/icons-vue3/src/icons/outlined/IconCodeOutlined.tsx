// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodeOutlinedSvg from 'icon-base/es/asn/CodeOutlined';

export interface CodeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCodeOutlined: CodeOutlinedIconType = (props, context) => <Icon name='CodeOutlined' {...{ ...props, ...context.attrs }} icon={CodeOutlinedSvg} />;

IconCodeOutlined.displayName = 'IconCodeOutlined';

export default IconCodeOutlined;
