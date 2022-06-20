// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileZipFilledSvg from 'icon-base/es/asn/FileZipFilled';

export interface FileZipFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileZipFilled: FileZipFilledIconType = (props, context) => <Icon name='FileZipFilled' {...{ ...props, ...context.attrs }} icon={FileZipFilledSvg} />;

IconFileZipFilled.displayName = 'IconFileZipFilled';

export default IconFileZipFilled;
