// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileImageOutlinedSvg from 'icon-base/es/asn/FileImageOutlined';

export interface FileImageOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileImageOutlined: FileImageOutlinedIconType = (props, context) => (
    <Icon name='FileImageOutlined' {...{ ...props, ...context.attrs }} icon={FileImageOutlinedSvg} />
);

IconFileImageOutlined.displayName = 'IconFileImageOutlined';

export default IconFileImageOutlined;
