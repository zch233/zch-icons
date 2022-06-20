// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderLeftOutlinedSvg from 'icon-base/es/asn/BorderLeftOutlined';

export interface BorderLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBorderLeftOutlined: BorderLeftOutlinedIconType = (props, context) => (
    <Icon name='BorderLeftOutlined' {...{ ...props, ...context.attrs }} icon={BorderLeftOutlinedSvg} />
);

IconBorderLeftOutlined.displayName = 'IconBorderLeftOutlined';

export default IconBorderLeftOutlined;
