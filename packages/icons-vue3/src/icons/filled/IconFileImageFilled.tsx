// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileImageFilledSvg from 'icon-base/es/asn/FileImageFilled';

export interface FileImageFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileImageFilled: FileImageFilledIconType = (props, context) => (
    <Icon name='FileImageFilled' {...{ ...props, ...context.attrs }} icon={FileImageFilledSvg} />
);

IconFileImageFilled.displayName = 'IconFileImageFilled';

export default IconFileImageFilled;
